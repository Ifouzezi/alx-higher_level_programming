#!/bin/bash
### Sends GET request with header variable, displays body of response
curl "$@" -sX GET -H "X-School-User-Id: 98"
