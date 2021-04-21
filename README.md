# Houdini Vex Help

This extension mimic the behaviour of the wrangle nodes "open help from selected text", but directly in vscode.

## Features

Select a function name in your code, run the command "Open Vex Help" from the command palette (ctrl+shift+p) or press F2, and it opens the help pages from the Houdini help of the function you selected.

## Requirements

[Houdini](https://www.sidefx.com/) must be installed on your machine.

This extension is very handy to use with the VEX language support for VSCode by [Mel Massadian](https://github.com/melMass/vscode-vex).

In order to use VSCode seamlessly on your wrangle node, you can use the plugin [HoudiniExprEditor](http://cgtoolbox.com/houdini-expression-editor/) from www.cgtoolbox.com.

## Settings

houdinivexhelp.houdiniHelpURL can be set to the URL you want to use, by default it uses the local default builtin help from Houdini (http://127.0.0.1:48626/vex/functions/")

But it also can be set to sidefx webside specific houdini version like: https://www.sidefx.com/docs/houdini18.0/vex/functions/

it **MUST** end with '/'. Your current text selection will be added at the end of the URL.


## Release Notes

### 0.0.2

Add setting "houdinivexhelp.houdiniHelpURL"

### 0.0.1

Initial release of Houdini Vex Help for VSCode

---

Any issues or feedback, feel free to reach me here:

www.cgtoolbox.com

contact@cgtoolbox.com

https://github.com/cgtoolbox

---
**Enjoy!**
