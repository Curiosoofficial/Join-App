/**
 * Demo content for the first visit.
 *
 * Without it, every visitor would start with an empty board. getItem() falls back to
 * this data for any key that has never been saved. As soon as the visitor saves
 * something (e.g. adds a task), their own data in localStorage is used instead.
 */


/**
 * Returns a date relative to today as "YYYY-MM-DD", so the demo deadlines never lie in the past
 *
 * @param {number} days - Number of days from today
 * @returns {string} The date in the format used by <input type="date">
 */
function daysFromNow(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
}


const DEMO_DATA = {
    users: [],
    subtasks: [],

    // The first three contacts are protected from deletion (see deleteSelectedContact)
    contacts: [
        { id: 1, firstName: 'Anna', lastName: 'Meier', email: 'anna.meier@example.com', phone: '+41 44 000 00 01', color: '#ff8a00' },
        { id: 2, firstName: 'Marco', lastName: 'Keller', email: 'marco.keller@example.com', phone: '+41 44 000 00 02', color: '#8aa4ff' },
        { id: 3, firstName: 'Sofia', lastName: 'Brunner', email: 'sofia.brunner@example.com', phone: '+41 44 000 00 03', color: '#e200be' },
        { id: 4, firstName: 'David', lastName: 'Huber', email: 'david.huber@example.com', phone: '+41 44 000 00 04', color: '#2ad300' },
        { id: 5, firstName: 'Lea', lastName: 'Schmid', email: 'lea.schmid@example.com', phone: '+41 44 000 00 05', color: '#0038ff' }
    ],

    // categories and categoryColors are parallel arrays: index 0 belongs to index 0
    categories: [
        { category: 'Design' },
        { category: 'Development' },
        { category: 'Marketing' },
        { category: 'Sales' }
    ],
    categoryColors: [
        { color: '#ff8a00' },
        { color: '#0038ff' },
        { color: '#e200be' },
        { color: '#2ad300' }
    ],

    tasks: [
        {
            id: 0, status: 'to-do', title: 'Wireframes for landing page',
            description: 'Sketch the mobile and desktop layout of the new landing page.',
            category: 'Design', categoryColor: '#ff8a00', priority: 'Medium', date: daysFromNow(6),
            assignedTo: [{ id: 1 }, { id: 3 }],
            subtask: [{ name: 'Mobile layout', checked: true }, { name: 'Desktop layout', checked: false }]
        },
        {
            id: 1, status: 'to-do', title: 'Newsletter for product launch',
            description: 'Write the text and pick the images for the launch newsletter.',
            category: 'Marketing', categoryColor: '#e200be', priority: 'Low', date: daysFromNow(14),
            assignedTo: [{ id: 5 }],
            subtask: []
        },
        {
            id: 2, status: 'in-progress', title: 'Contact form validation',
            description: 'Validate required fields and show clear error messages.',
            category: 'Development', categoryColor: '#0038ff', priority: 'Urgent', date: daysFromNow(2),
            assignedTo: [{ id: 2 }, { id: 4 }],
            subtask: [
                { name: 'Required fields', checked: true },
                { name: 'E-mail format', checked: true },
                { name: 'Error messages', checked: false }
            ]
        },
        {
            id: 3, status: 'in-progress', title: 'Mobile navigation',
            description: 'Burger menu for screens below 768px.',
            category: 'Development', categoryColor: '#0038ff', priority: 'Medium', date: daysFromNow(4),
            assignedTo: [{ id: 2 }],
            subtask: []
        },
        {
            id: 4, status: 'awaiting-feedback', title: 'Offer for new client',
            description: 'Send the price offer and wait for the client\'s answer.',
            category: 'Sales', categoryColor: '#2ad300', priority: 'Urgent', date: daysFromNow(1),
            assignedTo: [{ id: 4 }, { id: 5 }],
            subtask: [{ name: 'Calculate hours', checked: true }, { name: 'Send PDF', checked: true }]
        },
        {
            id: 5, status: 'done', title: 'Choose color palette',
            description: 'Define primary, secondary and accent colors.',
            category: 'Design', categoryColor: '#ff8a00', priority: 'Low', date: daysFromNow(-3),
            assignedTo: [{ id: 1 }],
            subtask: []
        }
    ]
};


/**
 * Returns the demo content for a storage key as JSON string
 *
 * @param {string} key - The storage key (e.g. "tasks")
 * @returns {string} The demo data as JSON string, or "[]" if there is none for this key
 */
function getDemoData(key) {
    return JSON.stringify(DEMO_DATA[key] || []);
}
