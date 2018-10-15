#!/bin/bash

sudo systemctl stop rnode

rm -rf ./rnode/casper-block-store/
rm -rf ./rnode/rspace/

rnode run --data_dir ./rnode/
