// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const open = require('open');

export function getCurrentTextSelection(){
	var editor = vscode.window.activeTextEditor;
	if (!editor) {
		return "";
	}

        var cursorPosition = editor.selection.start;
        var wordRange = editor.document.getWordRangeAtPosition(cursorPosition);
        var highlight = editor.document.getText(wordRange);    

        var token = highlight;
	
	var token = editor.document.getText(selection);
	if(token !== '')
	{
		token = token.replace(/[^a-zA-Z0-9_]/g, '');
	}
	return token;
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('houdinivexhelp.openVexHelp', () => {

		const workbenchConfig = vscode.workspace.getConfiguration('houdinivexhelp');
		const helpURL = workbenchConfig.get("houdiniHelpURL") as string;
		if(!helpURL.startsWith("http"))
		{
			vscode.window.showInformationMessage("Invalid URL setting: '" + helpURL + "'");
			return;
		}
		
		var token = getCurrentTextSelection();
		if(token !== ""){
			open(helpURL + token);
			vscode.window.showInformationMessage("Opening vex help page: " + helpURL);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
