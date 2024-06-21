"use server"
import { isEmpty } from 'lodash';

export const storeSession = ( session ) => {
	
	if ( isEmpty( session ) ) {
		return null;
	}

	if(typeof window !== 'undefined') {
		localStorage.setItem( 'x-wc-session', session );
	}
	
	
}

export const getSession = () => {
	if(typeof window !== 'undefined') {
		return localStorage.getItem( 'x-wc-session' );
	}
	
}