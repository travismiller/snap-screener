<?php

use DI\Container;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Slim\Exception\HttpBadRequestException;
use Slim\Factory\AppFactory;

use Nette\Mail\Message;
use Nette\Mail\SendmailMailer;
use Nette\Mail\SmtpMailer;

use App\Form;
use App\Serde;

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

function send_email(Form $form) {
    $mail = new Message;
    $mail->setFrom('John <john@example.com>')
        ->addTo('peter@example.com')
        ->addTo('jack@example.com')
        ->setSubject('Order Confirmation')
        ->setBody("Hello, Your order has been accepted.");

    $mailer = new SmtpMailer([
        'host' => getenv('MAIL_HOST'),
        'port' => getenv('MAIL_PORT'),
        'username' => getenv('MAIL_USERNAME'),
        'password' => getenv('MAIL_PASSWORD'),
        'secure' => getenv('MAIL_SECURE'),
    ]);

    $mailer->send($mail);
}

$container = new Container();
$container->set('Serde', function () {
    return new Serde;
});

$app = \DI\Bridge\Slim\Bridge::create($container);
$app->addRoutingMiddleware();
$app->setBasePath('/api');

/**
 * Middleware for applciation/json API only
 */
$app->add(function (Request $request, RequestHandler $handler) {
    list($contentType) = explode(';', $request->getHeaderLine('Content-Type'));

    if (strtolower($contentType) !== 'application/json') {
        throw new HttpBadRequestException($request, "required content type: application/json");
    }

    return $handler->handle($request)->withHeader('Content-Type', 'application/json');
});

$app->post('/form-submit', function (
    Request $request,
    Response $response,
    Serde $serde
) {
    $jsonData = $request->getBody();

    $form = $serde->deserialize($jsonData, Form::class, 'json');
    $eligibility = $form->eligible() ? 'eligible' : 'ineligible';
    $output = json_encode(compact('eligibility'));

    $response->getBody()->write($output);

    // TODO: send email
    send_email($form);

    return $response;
});

$errorMiddleware = $app->addErrorMiddleware(true, true, true);
$errorMiddleware->getDefaultErrorHandler()->forceContentType('application/json');

$app->run();
