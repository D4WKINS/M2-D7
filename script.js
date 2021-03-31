  
        // JS Exercises

        // EX11) Write a function to add a new link into the navbar

        const addLink = () =>{
                let nav = document.querySelector('div[class*=\'nav-scroller\'] > [class*=\'nav\']')
                let a = document.createElement('a')
                a.innerText = "Social"
                a.setAttribute('class','p-2 text-muted')
                nav.appendChild(a)
        }
            addLink()




        // EX12) Write a function to change the color of the main title

        const changeColorTitle = function(){

                let title = document.querySelector('.jumbotron > div > h1')
                    title.style.color = "firebrick"
        }
            // changeColorTitle()


        // EX13) Write a function to change the background of the jumbotron

        const bgColorJumbotron = function(){
           let jumbotron = document.querySelector('div[class*="jumbotron"]')
           jumbotron.classList.remove('bg-dark')
           jumbotron.style.backgroundColor = 'lightgreen'
        }
            // bgColorJumbotron()

        // EX14) Write a function to remove all the links under "Elsewhere"

        const removeLinks = () =>{

            // let list = document.querySelector('aside > div[class*=\'p-4\']:nth-child(3) > ol')
            // let links =  list.querySelectorAll('a')
            let list = document.querySelectorAll('.list-unstyled')[1]
            // links.forEach( link => link.remove())
            list.remove()
            console.log(list)
        }
        //  removeLinks()

        // EX15) Write a function to change the column size for post headings

        const headingColChange = function(){
            let blog = document.querySelectorAll('.col-md-8 blog-main > h2:first-of-type')
            console.log(blog)
        }
            headingColChange()

        // EX16) Write a function to remove the "Search" magnifying glass icon

        // EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

        // EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

        // EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

        // EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
  