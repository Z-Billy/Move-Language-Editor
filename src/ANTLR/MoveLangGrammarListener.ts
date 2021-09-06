// Generated from ./MoveLangGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MoveExpressionsContext } from "./MoveLangGrammarParser";
import { JumpPointContext } from "./MoveLangGrammarParser";
import { StepExpressionContext } from "./MoveLangGrammarParser";
import { LoopExpressionContext } from "./MoveLangGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MoveLangGrammarParser`.
 */
export interface MoveLangGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MoveLangGrammarParser.moveExpressions`.
	 * @param ctx the parse tree
	 */
	enterMoveExpressions?: (ctx: MoveExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveLangGrammarParser.moveExpressions`.
	 * @param ctx the parse tree
	 */
	exitMoveExpressions?: (ctx: MoveExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveLangGrammarParser.jumpPoint`.
	 * @param ctx the parse tree
	 */
	enterJumpPoint?: (ctx: JumpPointContext) => void;
	/**
	 * Exit a parse tree produced by `MoveLangGrammarParser.jumpPoint`.
	 * @param ctx the parse tree
	 */
	exitJumpPoint?: (ctx: JumpPointContext) => void;

	/**
	 * Enter a parse tree produced by `MoveLangGrammarParser.stepExpression`.
	 * @param ctx the parse tree
	 */
	enterStepExpression?: (ctx: StepExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoveLangGrammarParser.stepExpression`.
	 * @param ctx the parse tree
	 */
	exitStepExpression?: (ctx: StepExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MoveLangGrammarParser.loopExpression`.
	 * @param ctx the parse tree
	 */
	enterLoopExpression?: (ctx: LoopExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoveLangGrammarParser.loopExpression`.
	 * @param ctx the parse tree
	 */
	exitLoopExpression?: (ctx: LoopExpressionContext) => void;
}

