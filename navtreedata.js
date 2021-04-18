/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_clip_mode_8hpp_source.html",
"_expression_editor_widget_8hpp_source.html",
"_minuit_protocol_settings_widget_8hpp_source.html",
"_scenario_creation_state_8hpp_source.html",
"_visitor_interface_8hpp_source.html",
"class_base_scenario_presenter.html#ac0bb611061cbeefd53d3a6e32070de23",
"class_curve_1_1_model.html#a0c5a09981c9f4a4d0862df3c320417a2",
"class_curve_1_1_tool_palette.html#ab806e8e872b6431c77dec9a091f3ea43",
"class_data_stream_writer.html#a7287534d33aca07d621a15abe9baa4e1",
"class_device_1_1_address_accessor_edit_widget.html#af4e43ef05267e612cde179c583ccb2b1",
"class_execution_1_1_document_plugin.html#a943049e69bd228a948b99a3c73ed37a1",
"class_execution_1_1_transport_interface_list.html",
"class_explorer_1_1_device_explorer_filter_proxy_model.html#acd3dd944dbfc7b62e0d882d6c802cd5e",
"class_gfx_1_1_filter_1_1_model.html#a2c4d4406cdcb8e00a711f05cd1e130a6",
"class_gfx_1_1kinect2__decoder.html#af90612f9e25a27542220a2488c4a1799",
"class_interp_state_1_1_view.html#a6b8dfd13974942ac1826e23fe76cd688",
"class_j_s_o_n_reader.html#ab99c0078d9ec8975e6e8f8497cccdb91",
"class_library_1_1_process_widget.html#a2f6218a4dc02634a87b170d1392c6eb8",
"class_media_1_1_settings_1_1_model.html#a831c000f8768512055314f7805580aa1",
"class_midi_1_1_replace_notes.html#afc065ab8a0ac5b09413b0e6c28fc5451",
"class_opaque_string.html#a414c6bbeaeaa47a5e76dc53ee04e3b56",
"class_process_1_1_cable.html#a49052fb96990263d1ae3f85f961bcde9",
"class_process_1_1_layer_presenter.html#a569562954e1aeab337af9e50544d5567",
"class_process_1_1_process_model.html#a9d68041553afe98c0d8e7eba65815d0a",
"class_protocols_1_1_o_s_c_query_device.html#afddf29a67171983c4c0af2cbb0299dea",
"class_scenario_1_1_base_element_context.html#a965ea138a85f5e5b5abd4ca53ab6782a",
"class_scenario_1_1_command_1_1_create_interpolation_from_states.html#a7e24be883c3f0b720a3b94999da1ac67",
"class_scenario_1_1_command_1_1_move_event_on_creation_meta.html#adc12249a8322424984f32d0e3dfdc6cc",
"class_scenario_1_1_command_1_1_split_whole_sync.html#ad35410f53858580c9289f0ed9f8963fe",
"class_scenario_1_1_enable_when_scenario_interface_instant_object.html",
"class_scenario_1_1_interval_header.html#a66e12451ec601dca074a3ff61cc89939",
"class_scenario_1_1_item_type.html#ae2f99877ab3f1f28c0bd48aedacd172ea6cd283e7e5d6bb40850821c1f7b240d8",
"class_scenario_1_1_object_item_model.html#a0329bfcda32a690aa8c858d2e8478f01",
"class_scenario_1_1_scenario_interface.html#a72e1afc91d14451663b1870422dc0d22",
"class_scenario_1_1_state_model.html#a0505ce96be2914b71fff100c2c5ed7d1",
"class_scenario_1_1_time_sync_summary_widget.html#a66e0235404c22a9d9e6228ef1cd936c8",
"class_spline_1_1_curve_item.html#a9391be731151cf6f3f814cef76c395b9",
"class_tool_palette_input_dispatcher.html",
"class_web_socket_view.html#aa8d6f61c57b4ef0de68071e0ab9ce4b5",
"classscore_1_1_command_stack.html#a5679361b651e25fe456fe99f750f55be",
"classscore_1_1_entity_list.html#ad9c7885a1e9706c75a7a705075eb78d5",
"classscore_1_1_log_messages_item_model.html#a656864dc3ff9e0397e1bd1454aff51c6",
"classscore_1_1_q_graphics_knob.html#a99bbef6b010d28c6723cca6083f6a601",
"classscore_1_1_simple_text_item.html",
"classscore_1_1dynarray__impl.html",
"classvst3_1_1param__queue.html#a428c3fb257e2c7e9f5c2068391b2fcef",
"namespacescore.html",
"struct_control_1_1_auto_u_i_setup.html",
"struct_control_1_1setup___impl1___out.html",
"struct_engine_1_1score__to__ossia_1_1_curve_traits_3_01int_01_4.html",
"struct_gfx_1_1_kinect2_settings.html",
"struct_j_s_o_n_reader_1_1assigner.html#a61217a653a75393d2bb2ce0fe835acdd",
"struct_map_serializer.html",
"struct_midi_1_1_midi_track.html",
"struct_nodes_1_1_pulse_to_note_1_1_node_1_1val__visitor.html",
"struct_process_1_1_multi_script_dialog_1_1_editor_tab.html#a4fc533e5eee1a0e69ced41c296b351e3",
"struct_protocols_1_1_w_s_specific_settings.html#ac42f002e23e40296fea2c1915fc88f1f",
"struct_recording_1_1_record_automation_creation_visitor.html#a52cf5c7cf365f7e405c2447fda2cb6e3",
"struct_scenario_1_1_command_1_1color__converter.html#a9bd944586e5603066b131e67f7b0165a",
"struct_scenario_1_1_timebars.html#ad097e35432505c7791aa4c92391d7c7c",
"struct_std_variant_j_s_o_n_serializer.html#afd406d784acbdbce7ced9e9707d48c0e",
"struct_variant_data_stream_serializer.html",
"structscore_1_1_application_components_data.html#a63b49ec3bbfc661b230b71df91f6b852",
"structscore_1_1_log_message.html#a4b29b2ec802750b8e0ddbc52aab83b3f",
"structscore_1_1_string_constants.html#ab9b2341885a438d254b46cd4d8038fff",
"structvst3_1_1_application_plugin.html#a70f687b6ba78e477e55b3a6ec7085cea"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';