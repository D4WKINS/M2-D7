  
        // JS Exercises

        // EX11) Write a function to add a new link into the navbar

        const addLink = () =>{
                let nav = document.querySelector('div[class*=\'nav-scroller\'] > [class*=\'nav\']')
                let a = document.createElement('a')
                a.innerText = "Social"
                a.classList.add('p-2')
                a.classList.add('muted')
                nav.appendChild(a)
        }
            // addLink()




        // EX12) Write a function to change the color of the main title



        // EX13) Write a function to change the background of the jumbotron

        const bgColorJumbotron = function(){
           let jumbotron = document.querySelector('div[class*="jumbotron"]')
           jumbotron.style.backgroundColor = 'red !important'
        }
            bgColorJumbotron()

      

        

        // EX14) Write a function to remove all the links under "Elsewhere"

        // EX15) Write a function to change the column size for post headings

        // EX16) Write a function to remove the "Search" magnifying glass icon

        // EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

        // EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

        // EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

        // EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
  