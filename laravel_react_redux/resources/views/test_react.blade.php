<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=”csrf-token” content=”{{ csrf_token() }}”>

    <title>React Js</title>

    <!-- Compiled js  -->
    <script src="{{ mix('react/js/index.js') }}" defer></script>

    <!-- Compiled Styles,css -->
    <!-- <link rel="stylesheet" href="{{ mix('css/compiled/app.css') }}"> -->

</head>

<body class="antialiased">
    <h1>Laravel app</h1>
    <div id="react_app_routes"></div>
    <div id="react_app_users"></div>
</body>

</html>