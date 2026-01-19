package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.*;
import com.example.demo.repository.*;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    public Employee addEmployee(Employee emp) {
        return repo.save(emp);
    }

    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    public Employee getEmployeeById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Employee updateEmployee(Employee emp) {
        return repo.save(emp);
    }

    public void deleteEmployee(int id) {
        repo.deleteById(id);
    }
}
