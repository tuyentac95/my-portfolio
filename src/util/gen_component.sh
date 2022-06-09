#!/usr/bin/env bash

mkdir "../components/$1"
touch "../components/$1/$1.js"
touch "../components/$1/$1.css"

template_js="import React from 'react';\nimport './$1.css';\n\nconst $1 = () => {\n  return(\n    <div></div>\n  );\n}\n\nexport default $1;"
echo -e "$template_js" > "../components/$1/$1.js"