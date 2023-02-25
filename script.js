let addRow=document.querySelector('.btn')
let id=1
let tableData=[]
var regex=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/
function addData(){
    let r=document.createElement('tr')

    let inp1=document.createElement('td')
    inp1.innerText=id++
    r.appendChild(inp1)

    let inp2=document.createElement('td')
    let add2=document.createElement('input')
    add2.type='text'
    inp2.appendChild(add2)
    r.appendChild(inp2)

    let inp3=document.createElement('td')
    let add3=document.createElement('input')
    add3.type='number'
    inp3.appendChild(add3)
    r.appendChild(inp3)

    let inp4=document.createElement('td')
    let add4=document.createElement('input')
    add4.type='text'
    inp4.appendChild(add4)
    r.appendChild(inp4)

    let inp5=document.createElement('td')
    let add5=document.createElement('input')
    add5.type='number'
    inp5.appendChild(add5)
    r.appendChild(inp5)

    let inp6=document.createElement('td')
    let add6=document.createElement('input')
    add6.type='email'
    inp6.appendChild(add6)
    r.appendChild(inp6)
    
    let inp7=document.createElement('td')
    let add7=document.createElement('button')
    add7.innerText='save'
    inp7.appendChild(add7)
    r.appendChild(inp7)
    let x=0
    add7.addEventListener('click',saveData)
    function saveData(){
        if(add2.value!="" && add3.value!="" && add4.value!="" && add5.value!="" && add6.value!=""){
            if(x==0){
                if(add6.value.match(regex)){
                    tableData.push({
                        id:inp1.innerText,
                        student_name:add2.value,
                        student_roll:add3.value,
                        subject:add4.value,
                        marks:add5.value,
                        markedBy:add6.value
                    })
                    x++;
                }else{
                    alert("enter valid Email!!!")
                }
            }else{
                var temp=inp1.innerText
                tableData[temp-1]={
                    id:inp1.innerText,
                    student_name:add2.value,
                    student_roll:add3.value,
                    subject:add4.value,
                    marks:add5.value,
                    markedBy:add6.value
                }
            }
        }else{
            alert("enter valid filds!!!")
        }
        console.log(tableData)
    }

    body=document.querySelector('tbody')
    body.appendChild(r)
}

addRow.addEventListener('click',addData)
