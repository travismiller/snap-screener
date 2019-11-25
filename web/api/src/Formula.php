<?php

namespace App;

class Formula {
    /** @var int $add */
    public $add;

    /** @var int[] $table */
    public $table;

    public function __construct(int $add, array $table) {
        $this->add = $add;
        $this->table = $table;
    }

    public function calculate_limit(int $persons) {
        $keys = array_keys($this->table);
        $k = max($keys);
        $v = $table[$k];

        return $v + (($persons - $k) * $this->add);
    }
}
