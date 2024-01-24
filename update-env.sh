#!/bin/bash

echo "DATABASE_URL=$(aws ssm get-parameter --name '/amplify/d17peozzagnvp9/beta/AMPLIFY_alpha_beta_DATABASE_URL' --with-decryption | jq '.Parameter.Value')" >> .env