import{

    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    
}from "https://deno.land/std/testing/asserts.ts" 

let idade1 = 17;
let idade2 = 20;
let Personagens = [Kai, Mr.y,Line];
let nome = "lima";
Deno.test("Teste de idade",()=>{

    assertEquals(idade1 + idade2, 37);
   
})
Deno.test("Testando personagens", ()=>{

    assertArrayIncludes(Personagens, [Kai, Felix]);
})
Deno.test("Testando nomes 1 ", ()=>{

    assertStringIncludes(nome,"Joao");
})

Deno.test("Testando nomes 2 ", ()=>{

    assertStringIncludes(nome,"lima");
})
Deno.test("Teste de idade",()=>{

    assertEquals(idade1 + idade2, 40);
   
})