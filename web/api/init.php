<?php

use DI\Container;
use Nette\Mail\Message;
use Nette\Mail\SendmailMailer;
use Nette\Mail\SmtpMailer;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Slim\Exception\HttpBadRequestException;
use Slim\Factory\AppFactory;
use Symfony\Component\Serializer\Encoder\JsonEncode;

use App\Form;
use App\Serde;

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

function send_email(Form $form, Serde $serde) {
    $json = $serde->serialize($form, 'json', [JsonEncode::OPTIONS => JSON_PRETTY_PRINT]);

    $mail = new Message;
    $mail->setFrom('John <john@example.com>')
        ->addTo('peter@example.com')
        ->addTo('jack@example.com')
        ->setSubject('SNAP Screener Form Submitted')
        ->setBody("A submission has been recieved from the SNAP Screener Form\n\n---\n\nRaw Input:\n$json");

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

    send_email($form, $serde);

    return $response;
});

$errorMiddleware = $app->addErrorMiddleware(true, true, true);
$errorMiddleware->getDefaultErrorHandler()->forceContentType('application/json');

$app->run();
