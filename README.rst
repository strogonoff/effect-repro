::

    > yarn compile && yarn repro --watch --foobar
    > yarn compile && yarn repro --foobar

Any of the above will hang your shell. See `the issue <https://github.com/Effect-TS/cli/issues/435>`_ for more hangy flag combinations.

::

    > node --version
    v18.12.1
