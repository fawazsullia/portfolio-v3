import React from 'react';
import { globals } from '../globals';
import Link from 'next/link'

export const Header: React.FC = () => (
  <div className="header">
    <a href="/" style={{fontWeight : "700", fontSize : "1.2rem"}}>{globals.siteName}</a>
    <div className="flex-spacer" />
    <Link href="/blog">Blog</Link>
    <a href="https://github.com/fawazsullia" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/fawazsullia/" target="_blank">LinkedIn</a>
  </div>
);
