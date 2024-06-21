"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    const provider1 = vscode.languages.registerCompletionItemProvider('catscript', {
        provideCompletionItems(document, position, token, context) {
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
    });
    context.subscriptions.push(provider1);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map