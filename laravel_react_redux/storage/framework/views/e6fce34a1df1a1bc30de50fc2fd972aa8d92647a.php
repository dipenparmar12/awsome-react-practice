<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=”csrf-token” content=”<?php echo e(csrf_token()); ?>”>

    <title>React Js</title>

    <!-- Compiled js  -->
    <script src="<?php echo e(mix('react/js/index.js')); ?>" defer></script>

    <!-- Compiled Styles,css -->
    <!-- <link rel="stylesheet" href="<?php echo e(mix('css/compiled/app.css')); ?>"> -->

</head>

<body class="antialiased">
    <h1>Laravel app</h1>
    <div id="react_app_routes"></div>
    <div id="react_app_users"></div>
</body>

</html><?php /**PATH /mnt/ssd/projects/laravel_package_dev/laravels/laravel8.2/resources/views/test_react.blade.php ENDPATH**/ ?>