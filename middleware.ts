import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // We have two public path : /login and /signup
    // Our logic is : If somebody has the 'token' should not be able to access those public paths.

    // And also we have some procted paths : '/profile' etc.
    // logic is : somebody who is not allowed or not logged in he should not be seeing '/profile' paths.

    // What path we are or Current page path
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/admin/login'

    // Extracting the token
    const token = request.cookies.get('token')?.value || '' // if the token is there extract the value or provide the empty one


    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/admin', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/admin/login', request.nextUrl))
    }
    // console.log(request.nextUrl)
}


// See "Matching Paths" : On what route I want to match to run my middleware
export const config = {
    matcher: [
        '/admin/:path*',  // Match any path that starts with /admin
    ]
}
