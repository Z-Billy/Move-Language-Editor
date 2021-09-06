import { MoveLangGrammarListener } from './ANTLR/MoveLangGrammarListener'
import { MoveLangGrammarParser } from './ANTLR/MoveLangGrammarParser'
import { MoveExpressionsContext,StepExpressionContext,LoopExpressionContext, JumpPointContext } from "./ANTLR/MoveLangGrammarParser";

export default class MoveLangResultListener implements MoveLangGrammarListener {
  private  theResult =  "";

exitStepExpression (ctx: StepExpressionContext) {
  this.theResult+= ctx.Movement();
};

exitLoopExpression(ctx: LoopExpressionContext) {
  let x:number = 0;
  x = Number(ctx.NUM());
  for (var i=0 ; i<x ;i++)
    this.theResult+= ctx.Movement();

};

exitJumpPoint(ctx: JumpPointContext) {
  for (var j=0 ; j<3 ;j++)
    this.theResult+= ctx.Movement();

};

getResult(){return this.theResult;}
}
