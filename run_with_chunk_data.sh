#!/bin/bash

set -e
set -x

curl -d @request_with_chunk_data.txt https://tracking.services.mozilla.com/downloads -o response_with_chunk_data.out
