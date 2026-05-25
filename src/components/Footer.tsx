"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '64px 0', textAlign: 'center', background: 'var(--bg-color)', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)' }}>
      <p style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>&copy; {new Date().getFullYear()} Christophe Martin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
