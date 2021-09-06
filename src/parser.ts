import { MoveLangGrammarParser, MoveExpressionsContext } from "./ANTLR/MoveLangGrammarParser";
	import { MoveLangGrammarLexer } from "./ANTLR/MoveLangGrammarLexer";
	import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
	import {MoveLangGrammarListener} from "./ANTLR/MoveLangGrammarListener";
	import MoveLangErrorListener, { IMoveLangError } from "./MoveLangErrorListener";
	import MoveLangResultListener from "./MoveLangResultListener";
	import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";


	function parse(code: string): {ast:MoveExpressionsContext, errors: IMoveLangError[] , result:string} {
	    const inputStream = new ANTLRInputStream(code);
	    const lexer = new MoveLangGrammarLexer(inputStream);
	    lexer.removeErrorListeners()
	    const moveLangErrorsListner = new MoveLangErrorListener();
	    lexer.addErrorListener(moveLangErrorsListner);
	    const tokenStream = new CommonTokenStream(lexer);
	    const parser = new MoveLangGrammarParser(tokenStream);
	    parser.removeErrorListeners();
	    parser.addErrorListener(moveLangErrorsListner);
	    const ast = parser.moveExpressions();
	    const errors: IMoveLangError[]  = moveLangErrorsListner.getErrors();
			const results: MoveLangResultListener = new MoveLangResultListener();
    // Use the entry point for listeners
    	ParseTreeWalker.DEFAULT.walk(results as MoveLangGrammarListener, ast);
    	const result=results.getResult();
	    return {ast, errors,result};
	}
	export function parseAndGetASTRoot(code: string): MoveExpressionsContext {
	    const {ast} = parse(code);
	    return ast;
	}
	export function parseAndGetSyntaxErrors(code: string):string{// ISalamError[] {
	    const {errors} = parse(code);
	    let s:string;
	    if(errors.length>0)
	        s=errors[0].message;
	    else s="no error";
	    return s;
	}
	export function parseAndGetresults(code: string): string {
    const {result} = parse(code);
    return result;
}
