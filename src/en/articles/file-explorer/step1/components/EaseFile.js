export default class EaseFile extends HTMLElement{

    constructor(){
        super()
        //this.shadow = this.attachShadow({mode:'open'})
        this.innerHTML = `<div class="file">
        <div class="file-thumbnail"></div>
        <div class="fileName">
          <span id="name"></span>
          <span id="size"></span>
        </div>
      </div>
        <style>
          .file {
            margin: .5rem;
            float: left;
            cursor: pointer;
            outline: none;
          }                        
  
          .file-thumbnail {
            background-color: #ccc;          
            width: 15rem;
            height: 15rem;
          }
                          
          .fileName {
            padding-left: .1rem;
          }
                  
          :host(.active:focus) .fileName, .file:hover .fileName {
            background-color: #000;
            color: #fff;
          } 
          
          :host(.active:focus) .file {
            outline: .2rem solid #000;
          }
          :host(:focus) {
            outline: none;
          }
          
          :host([aria-selected="true"]) .fileName {
              background: #f16e00 !important;
          }                       
          
          #name {
            font-weight: bold;
            display: block;
          }
          
          :host-context(.display-list)  .file-thumbnail {
              width: 5rem;
              height: 5rem;
              display: inline-block;
          }
          
          :host-context(.display-list) .fileName {
            display: inline-block;
            width: 50rem;
            vertical-align: top;
            margin-top: 1.5rem;
          }        
                          
          :host-context(.display-list) #name, .display-list #size {
              width: 24rem;
              display: inline-block;
          }
  
          :host-context(.display-list) .file {
              padding-top: .5rem;
              padding-left: .5rem;
          }
          
          :host-context(.display-list):host([aria-selected="true"]) .fileName {
              background: transparent !important;
          }
              
          :host-context(.display-list) .fileName {
              background: transparent !important;
              color: #000 !important;    
          }
  
          :host-context(.display-list):host([aria-selected="true"]:focus) .fileName {
              color: #fff !important;
          }
              
          :host-context(.display-list):host([aria-selected="true"]) .file {
              background-color: #f16e00 !important;
          }
  
          :host-context(.display-list) .file:hover {
              background: #eee;
          }      
          
      </style>`
    }

    connectedCallback(){

        this.setAttribute("aria-label", this.getAttribute("name") + ", " + this.getAttribute("type") + ", " + this.getAttribute("size"));
        this.setAttribute("role","option");
        this.setAttribute("tabindex","-1");
        this.querySelector('#name').innerText = this.getAttribute("name") || "";
        this.querySelector('#size').innerText = this.getAttribute("size") || "";
        this.querySelector('.file-thumbnail').style.backgroundImage = "url('" + this.getAttribute("thumbnail") + "')";
        this.setAttribute("aria-selected", "false"); 
    }
}

