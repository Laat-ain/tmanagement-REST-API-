
create TABLE task(
    id SERIAL PRIMARY KEY,
    order_name VARCHAR(255),
    startDate DATE
);

create TABLE work(
    id SERIAL PRIMARY KEY,
    task VARCHAR(255),
    duration INTEGER,
    resources INTEGER,
    task_id INTEGER,
    FOREIGN KEY (task_id) REFERENCES task (id)
);