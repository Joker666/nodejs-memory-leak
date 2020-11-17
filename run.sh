#!/bin/bash

set -e

while getopts m:d:f: flag
do
    case "${flag}" in
        m) method=${OPTARG};;
        f) file=${OPTARG};;
        d) duration=${OPTARG};;
    esac
done

clinic doctor --on-port 'autocannon -w 300 -c 100 -d '$duration' localhost:3000/'$method'' -- node $file