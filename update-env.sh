#!/bin/bash

echo "DATABASE_URL=$(aws ssm get-parameter --name '/amplify/d3rrpjmy68f0j1/main/AMPLIFY_alpha_alpha_DATABASE_URL' --with-decryption | jq '.Parameter.Value')" >> .env