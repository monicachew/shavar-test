#!/bin/bash

set -e
set -x

curl -d @request.txt https://tracking.services.mozilla.com/downloads -o response.out
