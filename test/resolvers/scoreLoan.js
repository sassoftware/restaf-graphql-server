/*
 * ------------------------------------------------------------------------------------
 *   Copyright (c) SAS Institute Inc.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * ---------------------------------------------------------------------------------------
 *
 */
'use strict';
let caslBase = require('../lib/caslBase');

module.exports = async function scoreLoan (_, args, context) {
    let { store } = context;
    console.log(args);
    let input = {
        JOB    : 'J1',
        CLAGE  : 100, 
        CLNO   : 20, 
        DEBTINC: 20, 
        DELINQ : 2, 
        DEROG  : 0, 
        MORTDUE: 4000, 
        NINQ   : 1,
        YOJ    : 10
    };

    input.LOAN  = args.amount;
    input.VALUE = args.assets;

    let env = {
        astore: {
            caslib: 'Public',
            name  : 'GRADIENT_BOOSTING___BAD_2'
        }
    }
    let result = await caslBase(store,['argsToTable.casl', 'score.casl'], input, env);
    debugger;
    let score = result.items('results', 'score');
    console.log(score);
    console.log(JSON.stringify(result, null,4));
    
    return score;

}
