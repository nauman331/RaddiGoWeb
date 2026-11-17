import React from 'react'

// Visible "last updated" line for pages whose content actually changed
// on 17 Nov 2026. Only used on pages that were really edited that day —
// never on a page that was not touched.
const LastUpdated: React.FC = () => (
    <p className="mt-10 text-sm text-slate-500">Last updated: 17 Nov 2026</p>
)

export default LastUpdated
