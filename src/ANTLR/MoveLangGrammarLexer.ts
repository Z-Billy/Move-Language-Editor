// Generated from ./MoveLangGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MoveLangGrammarLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"GO", "Movement", "Jump", "FOR", "NUM", "Time", "LEFT", "RIGHT", "UP", 
		"DOWN", "SEMI", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'GO'", undefined, "'JUMP'", "'FOR'", undefined, "'TIMES'", 
		"'LEFT'", "'RIGHT'", "'UP'", "'DOWN'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "GO", "Movement", "Jump", "FOR", "NUM", "Time", "LEFT", "RIGHT", 
		"UP", "DOWN", "SEMI", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MoveLangGrammarLexer._LITERAL_NAMES, MoveLangGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MoveLangGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MoveLangGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MoveLangGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MoveLangGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MoveLangGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MoveLangGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MoveLangGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0ET\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03#\n\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x06\x06/\n\x06\r\x06\x0E\x060\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x06\rO\n\r\r\r\x0E\rP\x03\r\x03\r\x02\x02\x02\x0E\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x03\x02\x04\x03\x022;\x05" +
		"\x02\v\f\x0F\x0F\"\"\x02X\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\"\x03\x02\x02\x02" +
		"\x07$\x03\x02\x02\x02\t)\x03\x02\x02\x02\v.\x03\x02\x02\x02\r2\x03\x02" +
		"\x02\x02\x0F8\x03\x02\x02\x02\x11=\x03\x02\x02\x02\x13C\x03\x02\x02\x02" +
		"\x15F\x03\x02\x02\x02\x17K\x03\x02\x02\x02\x19N\x03\x02\x02\x02\x1B\x1C" +
		"\x07I\x02\x02\x1C\x1D\x07Q\x02\x02\x1D\x04\x03\x02\x02\x02\x1E#\x05\x0F" +
		"\b\x02\x1F#\x05\x11\t\x02 #\x05\x13\n\x02!#\x05\x15\v\x02\"\x1E\x03\x02" +
		"\x02\x02\"\x1F\x03\x02\x02\x02\" \x03\x02\x02\x02\"!\x03\x02\x02\x02#" +
		"\x06\x03\x02\x02\x02$%\x07L\x02\x02%&\x07W\x02\x02&\'\x07O\x02\x02\'(" +
		"\x07R\x02\x02(\b\x03\x02\x02\x02)*\x07H\x02\x02*+\x07Q\x02\x02+,\x07T" +
		"\x02\x02,\n\x03\x02\x02\x02-/\t\x02\x02\x02.-\x03\x02\x02\x02/0\x03\x02" +
		"\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x021\f\x03\x02\x02\x0223\x07" +
		"V\x02\x0234\x07K\x02\x0245\x07O\x02\x0256\x07G\x02\x0267\x07U\x02\x02" +
		"7\x0E\x03\x02\x02\x0289\x07N\x02\x029:\x07G\x02\x02:;\x07H\x02\x02;<\x07" +
		"V\x02\x02<\x10\x03\x02\x02\x02=>\x07T\x02\x02>?\x07K\x02\x02?@\x07I\x02" +
		"\x02@A\x07J\x02\x02AB\x07V\x02\x02B\x12\x03\x02\x02\x02CD\x07W\x02\x02" +
		"DE\x07R\x02\x02E\x14\x03\x02\x02\x02FG\x07F\x02\x02GH\x07Q\x02\x02HI\x07" +
		"Y\x02\x02IJ\x07P\x02\x02J\x16\x03\x02\x02\x02KL\x07=\x02\x02L\x18\x03" +
		"\x02\x02\x02MO\t\x03\x02\x02NM\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03" +
		"\x02\x02\x02PQ\x03\x02\x02\x02QR\x03\x02\x02\x02RS\b\r\x02\x02S\x1A\x03" +
		"\x02\x02\x02\x06\x02\"0P\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoveLangGrammarLexer.__ATN) {
			MoveLangGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MoveLangGrammarLexer._serializedATN));
		}

		return MoveLangGrammarLexer.__ATN;
	}

}

