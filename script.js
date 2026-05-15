function SelectRadioByButton(id)
{
    document.getElementById(id).checked = true;
}

function ChangeStyleOfButton(n)
{
    var ge = document.getElementById("g_e");
    var sr = document.getElementById("s_r");

    if(n == 0)
    {
        ge.style.background-color: hsl(186, 15%, 59%);
        ge.style.border-color: hsl(169, 82%, 27%);;
        ge.style.border-width: 2px;
    }
    else
    {

    }
}