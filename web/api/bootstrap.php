<?php

$loader = require_once __DIR__ . '/../vendor/autoload.php';

$loader->addPsr4('App\\', [
    __DIR__ . '/src',
]);

$loader->addPsr4('', [
    __DIR__ . '/lib',
]);

require_once __DIR__ . '/init.php';
