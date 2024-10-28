function gameOf3s(start) {
    let sequence = []; // To store the sequence of steps

    while (start !== 1) {
        if (start % 3 === 0) {
            // If divisible by 3, divide by 3
            sequence.push(`${start} 0`);
            start /= 3;
        } else {
            // If not divisible by 3, decide to add or subtract 1
            if ((start + 1) % 3 === 0) {
                sequence.push(`${start} 1`);
                start += 1;
            } else {
                sequence.push(`${start} -1`);
                start -= 1;
            }
            // After adding or subtracting, divide by 3
            sequence.push(`${start} 0`);
            start /= 3;
        }
    }

    // Add the final step of reaching 1
    sequence.push('1');

    // Output the sequence
    console.log(sequence.join('\n'));
}

// Example usage:
gameOf3s(10);
