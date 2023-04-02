import * as React from 'react';

import styles from './layout.module.css';

const DeparturesLayout = ({ children }: { children: React.ReactNode, }) => {

    return (
        <section>
            <div className={styles.layout}>
                {children}
            </div>
        </section>
    );
};

export default DeparturesLayout;
