// Generated from ./MoveLangGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MoveLangGrammarListener } from "./MoveLangGrammarListener";

export class MoveLangGrammarParser extends Parser {
	public static readonly GO = 1;
	public static readonly Movement = 2;
	public static readonly Jump = 3;
	public static readonly FOR = 4;
	public static readonly NUM = 5;
	public static readonly Time = 6;
	public static readonly LEFT = 7;
	public static readonly RIGHT = 8;
	public static readonly UP = 9;
	public static readonly DOWN = 10;
	public static readonly SEMI = 11;
	public static readonly WHITESPACE = 12;
	public static readonly RULE_moveExpressions = 0;
	public static readonly RULE_jumpPoint = 1;
	public static readonly RULE_stepExpression = 2;
	public static readonly RULE_loopExpression = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"moveExpressions", "jumpPoint", "stepExpression", "loopExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'GO'", undefined, "'JUMP'", "'FOR'", undefined, "'TIMES'", 
		"'LEFT'", "'RIGHT'", "'UP'", "'DOWN'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "GO", "Movement", "Jump", "FOR", "NUM", "Time", "LEFT", "RIGHT", 
		"UP", "DOWN", "SEMI", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MoveLangGrammarParser._LITERAL_NAMES, MoveLangGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MoveLangGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MoveLangGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MoveLangGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MoveLangGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MoveLangGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public moveExpressions(): MoveExpressionsContext {
		let _localctx: MoveExpressionsContext = new MoveExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MoveLangGrammarParser.RULE_moveExpressions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MoveLangGrammarParser.GO) | (1 << MoveLangGrammarParser.Jump) | (1 << MoveLangGrammarParser.FOR))) !== 0)) {
				{
				this.state = 11;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MoveLangGrammarParser.GO:
					{
					this.state = 8;
					this.stepExpression();
					}
					break;
				case MoveLangGrammarParser.FOR:
					{
					this.state = 9;
					this.loopExpression();
					}
					break;
				case MoveLangGrammarParser.Jump:
					{
					this.state = 10;
					this.jumpPoint();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpPoint(): JumpPointContext {
		let _localctx: JumpPointContext = new JumpPointContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MoveLangGrammarParser.RULE_jumpPoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.match(MoveLangGrammarParser.Jump);
			this.state = 17;
			this.match(MoveLangGrammarParser.Movement);
			this.state = 18;
			this.match(MoveLangGrammarParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stepExpression(): StepExpressionContext {
		let _localctx: StepExpressionContext = new StepExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MoveLangGrammarParser.RULE_stepExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.match(MoveLangGrammarParser.GO);
			this.state = 21;
			this.match(MoveLangGrammarParser.Movement);
			this.state = 22;
			this.match(MoveLangGrammarParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopExpression(): LoopExpressionContext {
		let _localctx: LoopExpressionContext = new LoopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MoveLangGrammarParser.RULE_loopExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.match(MoveLangGrammarParser.FOR);
			this.state = 25;
			this.match(MoveLangGrammarParser.NUM);
			this.state = 26;
			this.match(MoveLangGrammarParser.Time);
			this.state = 27;
			this.match(MoveLangGrammarParser.GO);
			this.state = 28;
			this.match(MoveLangGrammarParser.Movement);
			this.state = 29;
			this.match(MoveLangGrammarParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E\"\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x07\x02\x0E\n\x02\f\x02\x0E\x02\x11\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b" +
		"\x02\x02\x02\x02 \x02\x0F\x03\x02\x02\x02\x04\x12\x03\x02\x02\x02\x06" +
		"\x16\x03\x02\x02\x02\b\x1A\x03\x02\x02\x02\n\x0E\x05\x06\x04\x02\v\x0E" +
		"\x05\b\x05\x02\f\x0E\x05\x04\x03\x02\r\n\x03\x02\x02\x02\r\v\x03\x02\x02" +
		"\x02\r\f\x03\x02\x02\x02\x0E\x11\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02" +
		"\x0F\x10\x03\x02\x02\x02\x10\x03\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02" +
		"\x12\x13\x07\x05\x02\x02\x13\x14\x07\x04\x02\x02\x14\x15\x07\r\x02\x02" +
		"\x15\x05\x03\x02\x02\x02\x16\x17\x07\x03\x02\x02\x17\x18\x07\x04\x02\x02" +
		"\x18\x19\x07\r\x02\x02\x19\x07\x03\x02\x02\x02\x1A\x1B\x07\x06\x02\x02" +
		"\x1B\x1C\x07\x07\x02\x02\x1C\x1D\x07\b\x02\x02\x1D\x1E\x07\x03\x02\x02" +
		"\x1E\x1F\x07\x04\x02\x02\x1F \x07\r\x02\x02 \t\x03\x02\x02\x02\x04\r\x0F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoveLangGrammarParser.__ATN) {
			MoveLangGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MoveLangGrammarParser._serializedATN));
		}

		return MoveLangGrammarParser.__ATN;
	}

}

export class MoveExpressionsContext extends ParserRuleContext {
	public stepExpression(): StepExpressionContext[];
	public stepExpression(i: number): StepExpressionContext;
	public stepExpression(i?: number): StepExpressionContext | StepExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StepExpressionContext);
		} else {
			return this.getRuleContext(i, StepExpressionContext);
		}
	}
	public loopExpression(): LoopExpressionContext[];
	public loopExpression(i: number): LoopExpressionContext;
	public loopExpression(i?: number): LoopExpressionContext | LoopExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LoopExpressionContext);
		} else {
			return this.getRuleContext(i, LoopExpressionContext);
		}
	}
	public jumpPoint(): JumpPointContext[];
	public jumpPoint(i: number): JumpPointContext;
	public jumpPoint(i?: number): JumpPointContext | JumpPointContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JumpPointContext);
		} else {
			return this.getRuleContext(i, JumpPointContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveLangGrammarParser.RULE_moveExpressions; }
	// @Override
	public enterRule(listener: MoveLangGrammarListener): void {
		if (listener.enterMoveExpressions) {
			listener.enterMoveExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: MoveLangGrammarListener): void {
		if (listener.exitMoveExpressions) {
			listener.exitMoveExpressions(this);
		}
	}
}


export class JumpPointContext extends ParserRuleContext {
	public Jump(): TerminalNode { return this.getToken(MoveLangGrammarParser.Jump, 0); }
	public Movement(): TerminalNode { return this.getToken(MoveLangGrammarParser.Movement, 0); }
	public SEMI(): TerminalNode { return this.getToken(MoveLangGrammarParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveLangGrammarParser.RULE_jumpPoint; }
	// @Override
	public enterRule(listener: MoveLangGrammarListener): void {
		if (listener.enterJumpPoint) {
			listener.enterJumpPoint(this);
		}
	}
	// @Override
	public exitRule(listener: MoveLangGrammarListener): void {
		if (listener.exitJumpPoint) {
			listener.exitJumpPoint(this);
		}
	}
}


export class StepExpressionContext extends ParserRuleContext {
	public GO(): TerminalNode { return this.getToken(MoveLangGrammarParser.GO, 0); }
	public Movement(): TerminalNode { return this.getToken(MoveLangGrammarParser.Movement, 0); }
	public SEMI(): TerminalNode { return this.getToken(MoveLangGrammarParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveLangGrammarParser.RULE_stepExpression; }
	// @Override
	public enterRule(listener: MoveLangGrammarListener): void {
		if (listener.enterStepExpression) {
			listener.enterStepExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MoveLangGrammarListener): void {
		if (listener.exitStepExpression) {
			listener.exitStepExpression(this);
		}
	}
}


export class LoopExpressionContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(MoveLangGrammarParser.FOR, 0); }
	public NUM(): TerminalNode { return this.getToken(MoveLangGrammarParser.NUM, 0); }
	public Time(): TerminalNode { return this.getToken(MoveLangGrammarParser.Time, 0); }
	public GO(): TerminalNode { return this.getToken(MoveLangGrammarParser.GO, 0); }
	public Movement(): TerminalNode { return this.getToken(MoveLangGrammarParser.Movement, 0); }
	public SEMI(): TerminalNode { return this.getToken(MoveLangGrammarParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveLangGrammarParser.RULE_loopExpression; }
	// @Override
	public enterRule(listener: MoveLangGrammarListener): void {
		if (listener.enterLoopExpression) {
			listener.enterLoopExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MoveLangGrammarListener): void {
		if (listener.exitLoopExpression) {
			listener.exitLoopExpression(this);
		}
	}
}


