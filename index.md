# Test

<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="style.css">
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<script>
    $(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
            var file = $(this).data('include') + '/' + $(this).data('include') + '.html'
            $(this).load(file)
        })
    })
</script>


<body>
    <div data-include="bar-chart"></div>
</body>
