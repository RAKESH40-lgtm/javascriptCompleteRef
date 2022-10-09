//traverse DOM tree
// const rootNode=document.getRootNode()//gives the root node of doc as object
// console.log(rootNode)
// const hmlteleNode=rootNode.childNodes//it gives the  index of ele which gives us the document contain as it has only one child
// console.log(hmlteleNode)
// const hmlteleNode=rootNode.childNodes[0]//it gives the first index of ele
// console.log(hmlteleNode)//gives the childnodes of document which gives nodelist as it's nodelist we can indexing it 
// console.dir(hmlteleNode)//as it stores like object we can see it obj represent in js 
// console.log(hmlteleNode.childNodes)//has 3 childnode head,text,ele and can do indexing
// const headEle=hmlteleNode.childNodes[0]//print head
// const txt1=hmlteleNode.childNodes[1]//print textnode
// const body=hmlteleNode.childNodes[2]//print body
// console.log(headEle)
// console.log(txt1)
// console.log(body)
// console.log(headEle.parentNode)//will gives the parentNode
// console.log(headEle.nextSibling)//will gives the nextsibling
// console.log(headEle.nextSibling.nextSibling)//will gives the nextsibling to the nextsibling 
//due to style whitespace:normal browser show the normal but we change it by:pre then spaces are added
// console.log(headEle.nextElementSibling)//will gives the next element sibling ignoring text node
// console.log(headEle.childNodes)
//task select the h1 and goes to its parent and change the bg and color
// const heading=document.querySelector("h1")
// console.log(heading.parentNode)
// console.log(heading.parentNode.parentNode)//chaining the nodes by this
// heading.parentNode.style.background="blue"
// heading.parentNode.style.color="grey"
// document.body.style.color="red"//by this we can select the body 
//selct head
// const head=document.head
// console.log(head)
// const title=head.querySelector("title")
// console.log(title.childNodes)
// const div=document.querySelector("div")
// console.log(div.children)//by .children it avoids the textnodes shows the html collection 
// console.log(div.childNodes)