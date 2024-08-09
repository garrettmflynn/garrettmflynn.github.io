import * as cheerio from 'cheerio';
import { ContentData } from 'vitepress';

export function getSorted( 
    posts: ContentData[],
    { drafts = import.meta.env.DEV } = {}
) : ContentData[] {
    const allPosts =  [ ...posts ].sort( ( a, b ) => {
        const dateA = new Date( a.frontmatter.date ).getTime();
        const dateB = new Date( b.frontmatter.date ).getTime();
        return dateB - dateA;
    } );

    if ( drafts ) return allPosts;

    return allPosts.filter( post => post.frontmatter.status !== 'draft' );
}

export function formatDate( date: string ) {
    return new Date( date ).toLocaleString( 'EN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    } );
}

export function formatPageContentForRSS( htmlString: string, hostname: string ) : string | null {
    const $ = cheerio.load( htmlString );
    const images = $( 'figure img' );
    images.each( function() {
        const current = $( this ).attr( 'src' );
        $( this ).attr( 'src', `${hostname}${current}` );
    } );

    return $( 'main' ).html();
}