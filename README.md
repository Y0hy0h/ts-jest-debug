# Debug

In WebStorm you can debug the test by setting breakpoints. I've shared the run config, so it should already show up for you. Simply set some breakpoints and hit debug.

However, when you upgrade `ts-jest` to `23.0.1`, it will not hit the breakpoints anymore. Switching back and forth between the versions makes the tests debuggable or not.