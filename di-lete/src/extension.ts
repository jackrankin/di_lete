import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const object = {
    name: 'htmlTag',
    key: 'T',
    type: 'inclusive', // or 'exclusive'
    match: async (document: vscode.TextDocument, position: vscode.Position) => {
      const text = document.getText();
      const offset = document.offsetAt(position);

      const before = text.slice(0, offset);
      const after = text.slice(offset);

      const openTagMatch = [...before.matchAll(/<([a-zA-Z][^>\s]*)[^>]*>/g)].pop();
      const closeTagMatch = after.match(/<\/([a-zA-Z][^>\s]*)>/);

      if (!openTagMatch || !closeTagMatch) return;

      const start = openTagMatch.index! + openTagMatch[0].length;
      const end = offset + closeTagMatch.index!;

      const startPos = document.positionAt(start);
      const endPos = document.positionAt(end);

      return new vscode.Range(startPos, endPos);
    }
  };

  vscode.commands.executeCommand('vim.customTextObjects.add', object);
}

export function deactivate() {}
