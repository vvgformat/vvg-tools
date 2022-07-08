


 

export interface DocumentElement {
    type:string,
    tagName?:string,
    properties?: ElementProperties[]
    children?:DocumentElement[],
    value?:string
}

export interface ElementProperties { 
    name:string,
    value:string 
}

import { parse as parseSVG } from 'svg-parser';

export function importFromSVG( buffer:string ){
    let docTree =  parseToDocumentTree( buffer , 'svg')



}



export function exportToSVG(){


    
}


export function parseToDocumentTree( buffer:string, format:string ) : DocumentElement {  
    if(format == 'svg'){ 
        return sanitizeDocumentTree( parseSVG(buffer)  )
    }
    
    throw new Error(`Unrecognized format: ${format}`)
}




export function sanitizeDocumentTree( docTree: DocumentElement ) : DocumentElement {  
    let output = {type:"root"}

    //loop through each child in docTree and attach to output in the same way 


    return output 
}