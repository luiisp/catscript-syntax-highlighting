import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  const provider1 = vscode.languages.registerCompletionItemProvider(
    'catscript',
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

        const catCompletion = new vscode.CompletionItem('cat');
        catCompletion.kind = vscode.CompletionItemKind.Keyword;
        catCompletion.detail = 'Define a variable';

        const staticatCompletion = new vscode.CompletionItem('staticat');
        staticatCompletion.kind = vscode.CompletionItemKind.Keyword;
        staticatCompletion.detail = 'Define a constant';

        const nyancatCompletion = new vscode.CompletionItem('nyancat');
        staticatCompletion.kind = vscode.CompletionItemKind.Keyword;
        staticatCompletion.detail = 'Start a new while loop';

        const timecatCompletion = new vscode.CompletionItem('timecat');
        timecatCompletion.kind = vscode.CompletionItemKind.Keyword;
        timecatCompletion.detail = 'Display the current time';

        const catsCompletion = new vscode.CompletionItem('cats');
        catsCompletion.kind = vscode.CompletionItemKind.Keyword;
        catsCompletion.detail = 'Start a new for loop';

        const meowCompletion = new vscode.CompletionItem('meow');
        meowCompletion.kind = vscode.CompletionItemKind.Keyword;
        meowCompletion.detail = 'Print statement';

        const pspspsCompletion = new vscode.CompletionItem('pspsps');
        pspspsCompletion.kind = vscode.CompletionItemKind.Keyword;
        pspspsCompletion.detail = 'Define a function';

        return [
          catCompletion,
          staticatCompletion,
          meowCompletion,
          pspspsCompletion,
          nyancatCompletion,
          timecatCompletion,
          catsCompletion
        ];
      }
    }
  );

  context.subscriptions.push(provider1);
}

export function deactivate() {}
