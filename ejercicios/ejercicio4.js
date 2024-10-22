// Ejercicio 4: Cálculo del pago diario y semanal de empleados
const empleados = [
    {
        nombre: 'Empleado 1',
        turnos: ['nocturno', 'nocturno', 'nocturno', 'diurno', 'diurno'],
    },
    {
        nombre: 'Empleado 2',
        turnos: ['nocturno', 'nocturno', 'nocturno', 'diurno', 'domingo_diurno'],
    },
    {
        nombre: 'Empleado 3',
        turnos: ['diurno', 'diurno', 'diurno', 'nocturno', 'domingo_nocturno'],
    }
];

const tarifas = {
    diurno: 12000,
    nocturno: 16000,
    domingo_diurno: 14000,
    domingo_nocturno: 19000,
};

empleados.forEach(empleado => {
    let pagoSemanal = 0;
    empleado.turnos.forEach(turno => {
        pagoSemanal += tarifas[turno] * 10;
    });
    console.log(`${empleado.nombre} - Pago semanal: ${pagoSemanal} CLP`);
});
