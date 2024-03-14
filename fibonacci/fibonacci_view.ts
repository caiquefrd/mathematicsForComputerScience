import Fibonacci from "./models/Fibonacci_model";
import * as promptSync from "./node_modules/prompt-sync";

const prompt = promptSync();

let input:number = prompt('entre com o valor: ');

const position = new Fibonacci(1, input);

for( let i = 0 ; i < input ; i ++){
    console.log(`a posição ${position.Fibonacci(i)} é a soma de ${position.Fibonacci(i - 1)} + ${position.Fibonacci(i - 2)} `)
}
