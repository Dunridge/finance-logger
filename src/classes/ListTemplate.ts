import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement){}

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pos === "start") {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }

}


/*
(1) register a list container (ul) in the container
(2) create a render method to render a new 'li' to the container 
    (2.1) accept arguments: invoice or payment, a heading, a position 
    (2.2) create the html template (li, h4, p)
    (2.1) add the 'li' template to the start/end of the list  
*/