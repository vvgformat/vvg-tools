import fs from 'fs'

export function readLocalFile( path:string ) : string { 

    let buffer = fs.readFileSync( path, { encoding: 'utf8' } );
    
    return buffer; 

}