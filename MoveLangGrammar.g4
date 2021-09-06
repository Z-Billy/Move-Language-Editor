grammar MoveLangGrammar;

moveExpressions : (stepExpression | loopExpression| jumpPoint)*;

jumpPoint: Jump Movement SEMI ;

stepExpression : GO Movement SEMI ;

loopExpression : FOR NUM Time GO Movement SEMI  ;

GO : 'GO' ;

Movement:( LEFT | RIGHT | UP | DOWN );

Jump : 'JUMP' ;

FOR : 'FOR' ;

NUM  : [0-9]+ ;

Time : 'TIMES' ;

LEFT : 'LEFT' ;

RIGHT : 'RIGHT' ;

UP : 'UP' ;

DOWN : 'DOWN' ;

SEMI : ';' ;

WHITESPACE : ( ' ' | '\t' | '\n' | '\r' )+ -> skip ;
