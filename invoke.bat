@echo off



rem populate env var npm_bin_path with the output of "npm bin"

set npm_bin_path=
for /f "delims=" %%a in ('npm bin') do @set npm_bin_path=%%a



rem invoke the launch script for the cli tool and pass it all received parameters

call %npm_bin_path%\%*